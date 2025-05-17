import { ShoppingBag, Package, BarChart3, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]" />
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] w-[40rem] h-[40rem]"
        aria-hidden="true"
      />
      
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Shop Mins Billing & <span className="text-primary">Inventory System</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Offline-ready POS and inventory system for local grocery stores
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Sales & Billing</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Inventory Control</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Reporting</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Customer Loyalty</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5" />
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shop Mins Dashboard"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-primary p-4 shadow-lg">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">50+</span>
                <span className="text-xs text-primary-foreground">Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}