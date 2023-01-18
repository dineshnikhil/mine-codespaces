import React from 'react'
import FeatureCard from '../ui/FeatureCard/FeatureCard'
import classes from './Features.module.css'
import home_screen from '../../images/Home screen-amico.png'
import pie_chart from '../../images/Pie chart-amico.png'
import plain_card from '../../images/Plain credit card-cuate.png'

function Features() {
    var features = [
        {
            title: "Budget planner",
            description: "Say goodbye to spreadsheets with customizable budgets. Easily add and update your categories.",
            img_url: pie_chart
        },
        {
            title: "Credit monitoring",
            description: "Get 24/7 access to your score for free. Plus, we’ll let you know of any important changes on your report.",
            img_url: home_screen
        },
        {
            title: "Track your spending",
            description: "Stay on top of your finances by seeing where your money comes and goes.",
            img_url: plain_card
        }
    ]
  return (
    <div className={classes.features_div}>
        <h1>Mine is loaded with free features</h1>
        <div className={classes.features_showcase_div}>
            {features.map((obj) => {
                return <FeatureCard obj={obj} />
            })}
        </div>
    </div>
  )
}

export default Features