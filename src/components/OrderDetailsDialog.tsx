import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface OrderDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: any;
}

const OrderDetailsDialog = ({ open, onOpenChange, order }: OrderDetailsDialogProps) => {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>
            Order ID: {order.id}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Information */}
          <div>
            <h3 className="font-semibold mb-2">Customer Information</h3>
            <div className="space-y-1 text-sm">
              <p><span className="text-muted-foreground">Name:</span> {order.profiles?.full_name || 'N/A'}</p>
              <p><span className="text-muted-foreground">Email:</span> {order.profiles?.email}</p>
            </div>
          </div>

          <Separator />

          {/* Shipping Address */}
          <div>
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <div className="text-sm">
              {order.shipping_address ? (
                <>
                  <p>{order.shipping_address.address}</p>
                  <p>{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zipCode}</p>
                </>
              ) : (
                <p className="text-muted-foreground">No address provided</p>
              )}
            </div>
          </div>

          <Separator />

          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-3">Order Items</h3>
            <div className="space-y-3">
              {order.order_items?.map((item: any) => (
                <div key={item.id} className="flex gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-16 h-16 rounded overflow-hidden bg-background flex-shrink-0">
                    <img
                      src={item.products?.image}
                      alt={item.products?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.products?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity} × ${parseFloat(item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.quantity * parseFloat(item.price)).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Order Summary */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Status:</span>
              <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                {order.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Payment Status:</span>
              <Badge variant={order.payment_status === 'paid' ? 'default' : 'secondary'}>
                {order.payment_status}
              </Badge>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Payment Method:</span>
              <span className="text-sm">{order.payment_method || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Order Date:</span>
              <span className="text-sm">{new Date(order.created_at).toLocaleDateString()}</span>
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold">Total Amount:</span>
              <span className="font-bold text-primary">${parseFloat(order.total_amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
