import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Player } from '../../../app/types/player';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PlayerFieldGoalPercentageChartProps {
  player: Player;
}

export function PlayerFieldGoalPercentageChart({ player }: PlayerFieldGoalPercentageChartProps) {
  const [data, setData] = useState({
    labels: ['Field Goals', 'Field Attempts'],
    datasets: [
      {
        label: 'Shoots',
        data: [player.field_goals, player.field_attempts],
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
      labels: ['Goals', 'Missed'],
      datasets: [
        {
          label: 'Attempts',
          data: [player.field_goals, (player.field_attempts - player.field_goals)],
          backgroundColor: [
            'rgba(201, 8, 42, 0.2)',
            'rgba(23, 64, 139, 0.2)',
          ],
          borderColor: [
            'rgba(201, 8, 42, 1)',
            'rgba(23, 64, 139, 1)',
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
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
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
      }}
    />
  );
}