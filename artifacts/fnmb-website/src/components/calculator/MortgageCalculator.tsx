import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { Calculator } from "lucide-react";

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(1200);

  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPaymentAmount;

  const results = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    // P&I
    const monthlyPrincipalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const monthlyTax = (homePrice * (propertyTax / 100)) / 12;
    const monthlyInsurance = homeInsurance / 12;
    
    const totalMonthly = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance;

    return {
      monthlyPrincipalAndInterest,
      monthlyTax,
      monthlyInsurance,
      totalMonthly
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTerm, propertyTax, homeInsurance]);

  const chartData = [
    { name: "Principal & Interest", value: results.monthlyPrincipalAndInterest, color: "hsl(var(--primary))" },
    { name: "Property Taxes", value: results.monthlyTax, color: "hsl(var(--accent))" },
    { name: "Home Insurance", value: results.monthlyInsurance, color: "hsl(var(--chart-4))" }
  ];

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-accent overflow-hidden">
      <CardHeader className="bg-muted/30 pb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-serif text-2xl text-primary">Mortgage Calculator</CardTitle>
            <CardDescription>Estimate your monthly payments and see the breakdown</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold">Home Price</Label>
                <span className="font-mono font-medium text-lg">{formatCurrency(homePrice)}</span>
              </div>
              <Slider 
                value={[homePrice]} 
                min={100000} 
                max={2000000} 
                step={5000} 
                onValueChange={(v) => setHomePrice(v[0])}
                className="py-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-muted-foreground">Down Payment</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      type="number" 
                      value={downPaymentAmount.toFixed(0)} 
                      readOnly 
                      className="pl-8 bg-muted font-mono"
                    />
                  </div>
                  <div className="relative w-24">
                    <Input 
                      type="number" 
                      value={downPaymentPercent} 
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="pr-8 text-right font-mono"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-muted-foreground">Interest Rate</Label>
                <div className="relative">
                  <Input 
                    type="number" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="pr-8 font-mono"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-muted-foreground">Loan Term</Label>
                <Select value={loanTerm.toString()} onValueChange={(v) => setLoanTerm(Number(v))}>
                  <SelectTrigger className="font-mono">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Years Fixed</SelectItem>
                    <SelectItem value="20">20 Years Fixed</SelectItem>
                    <SelectItem value="15">15 Years Fixed</SelectItem>
                    <SelectItem value="10">10 Years Fixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-muted-foreground">Property Tax (Yearly)</Label>
                <div className="relative">
                  <Input 
                    type="number" 
                    step="0.1"
                    value={propertyTax} 
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="pr-8 font-mono"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 bg-muted/20 p-6 rounded-xl border flex flex-col justify-center">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Estimated Monthly Payment</h3>
            <div className="text-center text-5xl font-serif font-bold text-primary mb-8 tracking-tight">
              {formatCurrency(results.totalMonthly)}
            </div>

            <div className="h-[200px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {chartData.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-mono font-medium">{formatCurrency(item.value)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}