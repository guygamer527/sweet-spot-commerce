-- Safely add required foreign key relationships for embedding
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_orders_user_id_profiles'
  ) THEN
    ALTER TABLE public.orders
      ADD CONSTRAINT fk_orders_user_id_profiles
      FOREIGN KEY (user_id)
      REFERENCES public.profiles(id)
      ON DELETE CASCADE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_order_items_order_id_orders'
  ) THEN
    ALTER TABLE public.order_items
      ADD CONSTRAINT fk_order_items_order_id_orders
      FOREIGN KEY (order_id)
      REFERENCES public.orders(id)
      ON DELETE CASCADE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_order_items_product_id_products'
  ) THEN
    ALTER TABLE public.order_items
      ADD CONSTRAINT fk_order_items_product_id_products
      FOREIGN KEY (product_id)
      REFERENCES public.products(id)
      ON DELETE RESTRICT;
  END IF;
END $$;

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON public.order_items(product_id);
