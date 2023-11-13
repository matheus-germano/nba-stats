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
  Legend
);

interface SeasonScoresChartProps {
  seasons: Player[] | undefined
}

export function SeasonScoresChart({ seasons }: SeasonScoresChartProps) {
  const chartData = {
    labels: seasons?.sort((a, b) => a.season - b.season).map(season => season.season),
    datasets: [
      {
        label: 'Points',
        data: seasons?.sort((a, b) => a.season - b.season).map(season => season.PTS),
        borderColor: 'rgb(201, 8, 42)',
        backgroundColor: 'rgba(201, 8, 42, 0.5)',
      },
      {
        label: 'Assists',
        data: seasons?.sort((a, b) => a.season - b.season).map(season => season.AST),
        borderColor: 'rgb(23, 64, 139)',
        backgroundColor: 'rgba(23, 64, 139, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
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