import { useState } from 'react';
import { 
  ShoppingBag, Package, ReceiptText, Users, Briefcase, BarChart3 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeatureAccordion from './FeatureAccordion';
import { featureData } from '@/data/featureData';

type FeatureSectionsProps = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
};

export default function FeatureSections({ 
  activeSection, 
  setActiveSection 
}: FeatureSectionsProps) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { 
      id: 'product-catalog', 
      name: 'Product & Catalog Management',
      icon: <ShoppingBag className="h-4 w-4" />
    },
    { 
      id: 'inventory-control', 
      name: 'Inventory Control & Stock Management',
      icon: <Package className="h-4 w-4" />
    },
    { 
      id: 'sales-billing', 
      name: 'Sales & Billing',
      icon: <ReceiptText className="h-4 w-4" />
    },
    { 
      id: 'customer-loyalty', 
      name: 'Customer & Loyalty Management',
      icon: <Users className="h-4 w-4" />
    },
    { 
      id: 'purchase-supplier', 
      name: 'Purchase & Supplier Management',
      icon: <Briefcase className="h-4 w-4" />
    },
    { 
      id: 'reporting-utilities', 
      name: 'Reporting & Utilities',
      icon: <BarChart3 className="h-4 w-4" />
    },
  ];

  return (
    <section id="features" className="bg-muted/30 py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All the features you need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our comprehensive system includes 50+ features to streamline your business operations
          </p>
        </div>

        <div className="mt-16">
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center">
              <TabsList className="mb-8 grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="all">All Features</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="core">Core</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              {categories.map((category) => (
                <div key={category.id} className="rounded-lg border bg-card shadow-sm">
                  <div 
                    className="flex items-center justify-between px-4 py-3 sm:px-6"
                    onClick={() => setActiveSection(
                      activeSection === category.id ? null : category.id
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <h3 className="text-lg font-medium">{category.name}</h3>
                    </div>
                  </div>
                  <FeatureAccordion 
                    features={featureData[category.id]} 
                    isExpanded={activeSection === category.id}
                  />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="popular" className="space-y-8">
              {categories.map((category) => {
                // Filter just a few popular features from each category
                const popularFeatures = featureData[category.id].filter(
                  (_, index) => index < 3
                );
                
                return (
                  <div key={category.id} className="rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <h3 className="text-lg font-medium">{category.name}</h3>
                      </div>
                    </div>
                    <FeatureAccordion 
                      features={popularFeatures} 
                      isExpanded={true}
                    />
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              {/* Show only categories with advanced features */}
              {['inventory-control', 'reporting-utilities', 'sales-billing'].map((categoryId) => {
                const category = categories.find(c => c.id === categoryId);
                if (!category) return null;
                
                // Filter advanced features
                const advancedFeatures = featureData[categoryId].filter(
                  (_, index) => index > 4
                );
                
                return (
                  <div key={categoryId} className="rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <h3 className="text-lg font-medium">{category.name}</h3>
                      </div>
                    </div>
                    <FeatureAccordion 
                      features={advancedFeatures} 
                      isExpanded={true}
                    />
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="core" className="space-y-8">
              {/* Show only essential core features */}
              {categories.map((category) => {
                // Filter core features (first 2 from each category)
                const coreFeatures = featureData[category.id].filter(
                  (_, index) => index < 2
                );
                
                return (
                  <div key={category.id} className="rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <h3 className="text-lg font-medium">{category.name}</h3>
                      </div>
                    </div>
                    <FeatureAccordion 
                      features={coreFeatures} 
                      isExpanded={true}
                    />
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}