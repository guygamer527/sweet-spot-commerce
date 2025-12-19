import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Wallet, DollarSign, Lock } from 'lucide-react';

const Payment = () => {
  const { user } = useAuth();
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const shippingData = location.state?.shippingData;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardForm, setCardForm] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  useEffect(() => {
    if (!user || !shippingData || cart.length === 0) {
      navigate('/cart');
    }
  }, [user, shippingData, cart, navigate]);

  const processPayment = async () => {
    if (paymentMethod === 'card') {
      if (!cardForm.cardNumber || !cardForm.cardName || !cardForm.expiry || !cardForm.cvv) {
        toast({
          title: "Missing Information",
          description: "Please fill in all card details.",
          variant: "destructive",
        });
        return;
      }
    }

    setIsProcessing(true);
    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([{
          user_id: user!.id,
          total_amount: getTotalPrice(),
          status: 'pending',
          payment_status: paymentMethod === 'cod' ? 'pending' : 'paid',
          payment_method: paymentMethod,
          shipping_address: shippingData,
        }])
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cart.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast({
        title: "Order Placed Successfully!",
        description: paymentMethod === 'cod' 
          ? "Your order will be delivered soon. Pay on delivery."
          : "Payment processed successfully. Your order is confirmed.",
      });

      clearCart();
      navigate('/orders');
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!shippingData) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Payment</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
                
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-4">
                    <Label
                      htmlFor="card"
                      className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent/50"
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5" />
                      <span className="flex-1 font-medium">Credit/Debit Card</span>
                    </Label>

                    <Label
                      htmlFor="wallet"
                      className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent/50"
                    >
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Wallet className="h-5 w-5" />
                      <span className="flex-1 font-medium">Digital Wallet</span>
                    </Label>

                    <Label
                      htmlFor="cod"
                      className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent/50"
                    >
                      <RadioGroupItem value="cod" id="cod" />
                      <DollarSign className="h-5 w-5" />
                      <span className="flex-1 font-medium">Cash on Delivery</span>
                    </Label>
                  </div>
                </RadioGroup>
              </Card>

              {paymentMethod === 'card' && (
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardForm.cardNumber}
                        onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                        maxLength={19}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        value={cardForm.cardName}
                        onChange={(e) => setCardForm({ ...cardForm, cardName: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={cardForm.expiry}
                          onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                          maxLength={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          type="password"
                          value={cardForm.cvv}
                          onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {paymentMethod === 'wallet' && (
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Digital Wallet</h3>
                  <p className="text-muted-foreground mb-4">
                    You will be redirected to complete the payment with your preferred wallet service.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">PayPal</Button>
                    <Button variant="outline" className="flex-1">Google Pay</Button>
                    <Button variant="outline" className="flex-1">Apple Pay</Button>
                  </div>
                </Card>
              )}
            </div>

            <div>
              <Card className="p-6 sticky top-20">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items ({cart.length})</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium mb-2">Delivery Details:</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">{shippingData.fullName}</p>
                    <p>{shippingData.phone}</p>
                    <p>{shippingData.address}</p>
                    <p>{shippingData.city}, {shippingData.state} {shippingData.zipCode}</p>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={processPayment}
                  disabled={isProcessing}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  {isProcessing ? 'Processing...' : `Pay $${getTotalPrice().toFixed(2)}`}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Your payment information is secure and encrypted
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
