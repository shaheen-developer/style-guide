import { Steps, Button, message } from 'antd';
import React from 'react'
const { Step } = Steps;
const steps = [
    {
      title: 'Finished',
      content: 'First-Content',
    },
    {
      title: 'In-Progress',
      content: 'Second-Content',
    },
    {
      title: 'Waiting',
      content: 'Third-Content',
    },
  ];

  
  export default function StepRCComponent() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
      return (
          <div >  
              <Steps current={current} style={{width:600}}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    
          </div>
      )
  }
  