import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';


export const Title: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className, children, ...rest}) => {
  return <p className={clsx(className, 'text-[40px] font-medium leading-snug')} {...rest}>
    {children}
  </p>
}

export const Description: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className, children, ...rest}) => {
  return <p className={clsx(className, 'text-xl text-gray-400')} {...rest}>
    {children}
  </p>
}

const CodeSample = () => {
  const [lang, setLang] = useState('python');
  useEffect(() => {
    highlight.highlightAll()
  }, [])
  return <div className='max-w-7xl mx-auto mb-60 text-center'>
    <Title>
      同时支持Python和Go
    </Title>
    <Description className='mt-10 text-left mx-auto'>
      不论你的函数是基于Python还是Go，它们都可以在bloc上运行。这意味着你无需在Go和Python中二选一，在某个工作流程中，上一个节点是用Python写的函数，而下一个节点则是用Go写的函数的这种情况是完全被支持的。
    </Description>
    <div className='mt-6 text-left'>
      <button onClick={() => {
        setLang('python')
      }} className={clsx('cursor-pointer h-10 px-8 rounded-lg bg-transparent text-white  border border-solid', lang === 'python' ? 'border-white' : 'border-transparent opacity-60')}>
        Python
      </button>
      <button onClick={() => {
        setLang('go')
      }} className={clsx('ml-2 cursor-pointer h-10 px-8 rounded-lg bg-transparent text-white  border border-solid', lang === 'go' ? 'border-white' : 'border-transparent opacity-60')}>
        Go
      </button>
    </div>
    <div className='mt-4 text-left rounded-lg bg-[#282c34] pb-3'>
      <div className='px-3 pt-3'>
        <span className='w-3 h-3 bg-opacity-10 bg-white inline-block rounded-full ml-2'></span>
        <span className='w-3 h-3 bg-opacity-10 bg-white inline-block rounded-full ml-2'></span>
        <span className='w-3 h-3 bg-opacity-10 bg-white inline-block rounded-full ml-2'></span>
      </div>
      <div className='h-[70vh] overflow-auto'>
        <pre className='p-0 bg-[#282c34]'>
<code className={clsx('language-python hljs', {
  '!hidden': lang !== 'python'
})}>
{`from typing import List
from bloc_client import *

class Add(FunctionInterface):
    def ipt_config(self) -> List[FunctionIpt]:
        return [
            FunctionIpt(
                key="numbers",
                display="int numbers",
                must=True,
                components=[
                    IptComponent(
                        value_type=ValueType.intValueType,
                        formcontrol_type=FormControlType.FormControlTypeInput,
                        hint="input integer numbers",
                        default_value=None,
                        allow_multi=True,
                    )
                ]
            ),
        ]
    
    def opt_config(self) -> List[FunctionOpt]:
        return [
            FunctionOpt(
                key="result",
                description="arithmetic operation result",
                value_type=ValueType.intValueType,
                is_array=False)
        ]
    
    def all_progress_milestones(self) -> List[str]:
        return []
    
    def run(
        self, 
        ipts: List[FunctionIpt], 
        queue: FunctionRunMsgQueue
    ) -> FunctionRunOpt:
        queue.report_log(log_level=LogLevel.info, msg="start")

        numbers = ipts[0].components[0].value
        if not numbers:
            pass  # TODO return param error

        queue.report_function_run_finished_opt(
            FunctionRunOpt(
                suc=True, 
                optKey_map_data={'result': sum(numbers)}
            )
        )`}
</code>
<code className={clsx('language-go hljs', {
  '!hidden': lang !== 'go'
})}>
{`package numbers_sum

import (
  "context"
  "fmt"

  bloc_client "github.com/fBloc/bloc-client-go"
)

func init() {
  var _ bloc_client.BlocFunctionNodeInterface = &MathCalcu{}
}

type Add struct{}

func (*Add) IptConfig() bloc_client.Ipts {
  return bloc_client.Ipts{
    {
      Key:     "numbers",
      Display: "int numbers",
      Must:    true, // this ipt must be set
      Components: []*bloc_client.IptComponent{
        {
          ValueType:       bloc_client.IntValueType,     // input should be int type
          FormControlType: bloc_client.InputFormControl, // frontend should use input
          Hint:            "input integer numbers",      // hint for frontend user
          AllowMulti:      true,                         // allow input multi
        },
      },
    },
  }
}

func (*Add) OptConfig() bloc_client.Opts {
  return bloc_client.Opts{
    {
      Key:         "result",
      Description: "arithmetic operation result",
      ValueType:   bloc_client.IntValueType,
      IsArray:     false,
    },
  }
}

func (*Add) Run(
  ctx context.Context,
  ipts bloc_client.Ipts,
  progressReportChan chan bloc_client.HighReadableFunctionRunProgress,
  blocOptChan chan *bloc_client.FunctionRunOpt,
  logger *bloc_client.Logger,
) {
  logger.Infof("start")

  numbersSlice, err := ipts.GetIntSliceValue(0, 0)
  if err != nil {
    // TODO return error
  }

  ret := 0
  for _, i := range numbersSlice {
    ret += i
  }
  blocOptChan <- &bloc_client.FunctionRunOpt{
    Suc:         true,
    Detail:      map[string]interface{}{"result": ret},
    Description: fmt.Sprintf("received %d number", len(numbersSlice)),
  }
}`}
            </code>
        </pre>
      </div>
    </div>
  </div>
}

export default CodeSample;