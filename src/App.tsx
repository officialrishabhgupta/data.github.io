import "./App.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
  ResponsiveContainer
} from "recharts";


const data = [
  { sector: 'Basic Materials', perChange: -0.52, noOfStocks: 0 },
  { sector: 'Communications', perChange: 6, noOfStocks: 0 },
  { sector: 'Communication Services', perChange: -3.29, noOfStocks: 0 },
  { sector: 'Conglomerates', perChange: -4, noOfStocks: 0 },
  { sector: 'Consumer Cyclical', perChange: -4.39, noOfStocks: 0 },
  { sector: 'Consumer Defensive', perChange: -2.84, noOfStocks: 0 },
  { sector: 'Energy', perChange: 3.74, noOfStocks: 0 },
  { sector: 'Financial Services', perChange: 4.14, noOfStocks: 0 },
  { sector: 'Healthcare', perChange: -6.44, noOfStocks: 0 },
  { sector: 'Industrials', perChange: -2.63, noOfStocks: 0 },
  { sector: 'Miscellaneous', perChange: -14.29, noOfStocks: 0 },
  { sector: 'Others', perChange: -1.19, noOfStocks: 0 },
  { sector: 'Real Estate', perChange: -3.78, noOfStocks: 0 },
  { sector: 'Services', perChange: -19.12, noOfStocks: 0 },
  { sector: 'Technology', perChange: -5.04, noOfStocks: 0 },
  { sector: 'Utilities', perChange: -2.52, noOfStocks: 0 }
];


export default function App() {
  return (
    <ResponsiveContainer width={600} height={500}>
      <BarChart
        width={400}
        height={500}
        data={data}
        layout="vertical"
        barCategoryGap={1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3" horizontal={true} vertical={false} />
        <XAxis type="number" hide />
        <YAxis dataKey="sector" type="category" width={150} />
        <Bar
          dataKey="perChange"
          barSize={200}
          fill="red"
          radius={[0, 20, 20, 0]}
        >
          <LabelList
            dataKey="perChange"
            position="left"
            formatter={(val:number) => (val > 0 ? `+${val}%` : `${val}%`)}
          />
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={entry.perChange > 0 ? "#80B41C" : "#A8331F"}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
