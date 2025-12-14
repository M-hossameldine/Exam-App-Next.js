'use client';

import { useMemo } from 'react';
import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';

export const description = 'A donut chart with text';

const chartConfig = {
  correct: {
    label: 'Correct',
    color: 'hsl(var(--success))',
  },
  wrong: {
    label: 'Wrong',
    color: 'hsl(var(--destructive))',
  },
} satisfies ChartConfig;

type ResultChartProps = {
  correct: number;
  wrong: number;
};

export default function ResultChart({ correct, wrong }: ResultChartProps) {
  const chartData = useMemo(() => {
    return [
      { label: 'Correct', value: correct, fill: 'hsl(var(--success))' },
      { label: 'Wrong', value: wrong, fill: 'hsl(var(--destructive))' },
    ];
  }, [correct, wrong]);

  return (
    <Card className="flex flex-col p-0 border-none -translate-x-10">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-48"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={50}
              strokeWidth={10}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="space-y-2">
          {chartData.map((entry, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-[2px]"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="text-sm font-medium">
                {entry.label}: {entry.value}
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
