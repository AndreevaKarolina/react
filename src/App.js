import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Образование", 108],
  ["ЖКХ", 94],
  ["Дороги",77],
  ["Стоительство", 57],
  ["Экология", 38],
  ["Медицина", 24],
  ["Общественный транспорт", 18],
  ["Культура", 10],
  ["Спорт", 7],
];

export const options = {
  title: "ТОП-10 СФЕР",
};

function App() {
  return (
    <>
      <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      />
        </>
      
  );
}

export default App;
