-- Allow admins to view all profiles for order management
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

CREATE POLICY "Users can view their own profile or admins can view all" 
ON public.profiles 
FOR SELECT 
USING (
  auth.uid() = id OR has_role(auth.uid(), 'admin'::app_role)
);