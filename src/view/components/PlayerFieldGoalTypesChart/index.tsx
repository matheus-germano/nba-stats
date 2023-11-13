import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Player } from '../../../app/types/player';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PlayerFieldGoalTypesChartProps {
  player: Player;
}

export function PlayerFieldGoalTypesChart({ player }: PlayerFieldGoalTypesChartProps) {
  const [data, setData] = useState({
    labels: ['Two Field Goals', 'Three Field Goals'],
    datasets: [
      {
        label: 'Shoots',
        data: [player.two_fg, player.three_fg],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setData({
      labels: ['Two Field Goals', 'Three Field Goals'],
      datasets: [
        {
          label: 'Shoots',
          data: [player.two_fg, player.three_fg],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [player]);

  return (
    <Pie
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
          }
        }
      }}
    />
  );
}