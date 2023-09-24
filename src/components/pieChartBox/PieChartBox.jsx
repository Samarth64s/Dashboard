import React from 'react'
import "./pieChartBox.scss"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {name: "React",value:400, color: "#0088fe"},
    {name: "Node",value:300, color: "#00c49f"},
    {name: "JavaScript",value:300, color: "#ffbb28"},
    {name: "SQL",value:200, color: "#ff8042"},
];

const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
        <h1>Leads by Source</h1>
        <div className='chart'>
            <ResponsiveContainer width="99%" height={300}>
            <PieChart >
            <Tooltip
            contentStyle={{background: "white", borderRadius:"5px"}}/>
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell 
            key={item.name}
             fill={item.color} />
          ))}
        </Pie>
      </PieChart>
            </ResponsiveContainer>
        </div>
        <div className='options'>
            {data.map((item)=>{
          return  <div className='option' key={item.name}>
                    <div className='title'>
                        <div className='dot' style={{backgroundColor: item.color}}/>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            })}
        </div>
    </div>
  )
}

export default PieChartBox

