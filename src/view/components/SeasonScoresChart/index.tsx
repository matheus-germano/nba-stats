import { Player } from '../../../app/types/player';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartContext {
  chart: {
    ctx: CanvasRenderingContext2D;
    chartArea: {
      bottom: number;
      top: number;
    };
  };
}

interface SeasonScoresChartProps {
  seasons: Player[] | undefined
}

export function SeasonScoresChart({ seasons }: SeasonScoresChartProps) {
  function createBackgroundGradient(context: ChartContext, color: string) {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return null;
    }
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, `rgba(${color}, 0.25)`);
    gradient.addColorStop(0, `rgba(${color}, 0.1)`);
    return gradient;
  }

  const chartData = {
    labels: seasons?.sort((a, b) => a.season - b.season).map(season => season.season),
    datasets: [
      {
        label: 'Assists',
        data: seasons?.sort((a, b) => a.season - b.season).map(season => season.AST),
        borderColor: 'rgb(23, 64, 139)',
        backgroundColor: (context: ChartContext) => createBackgroundGradient(context, '23, 64, 139') ?? 'rgba(23, 64, 139, 0.5)',
        fill: true,
        tension: 0.5
      },
      {
        label: 'Points',
        data: seasons?.sort((a, b) => a.season - b.season).map(season => season.PTS),
        borderColor: 'rgb(201, 8, 42)',
        backgroundColor: (context: ChartContext) => createBackgroundGradient(context, '201, 8, 42') ?? 'rgba(201, 8, 42, 0.5)',
        fill: true,
        tension: 0.5
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 5,
          font: {
            family: "'Inter', sans-serif"
          }
        }
      }
    }
  };

  const [data, setData] = useState(chartData);
  const [options, setOptions] = useState(chartOptions);

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [seasons]);
  
  return (
    <Line
      options={options}
      data={data}
    />
  );
}