export const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 60, 80, 82, 56, 55, 59], // Sales values for each month
            fill: false, // Line is not filled under the curve
            backgroundColor: 'rgba(75,192,192,0.4)', // Background color (used for point fill or optional fills)
            borderColor: 'rgba(75,192,192,1)', // Line color
        },
    ],
};

export const dataBar = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'], // Categories on x-axis
    datasets: [
        {
            label: 'Quantity',
            data: [10,17, 4, 7], // Quantities for each product
            backgroundColor: 'rgba(153,102,255,0.2)', // Bar fill color
            borderColor: 'rgba(153,102,192,1)', // Bar border color
            borderWidth: 1, // Width of bar border
        },
    ],
};
