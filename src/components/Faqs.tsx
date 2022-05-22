import React, { useState } from 'react';
import { Collapse, IconButton } from '@mui/material'
import {FaChevronDown} from 'react-icons/fa'
const Item: React.FC<{title: React.ReactNode; children: React.ReactNode}> = ({title, children}) => {

  const [visible, setVisible] = useState(false);
  return <div className='py-3 bg-opacity-5 bg-white mb-2 rounded-lg'>
    <p className='text-2xl px-3 pt-4 flex items-center justify-between' onClick={() => {
      setVisible(v => !v)
    }}>
      {title}
      <IconButton color="inherit">
        <FaChevronDown size={14} />
      </IconButton>
    </p>
    <Collapse in={visible} className="p-3 text-lg leading-normal text-gray-300">
      {children}
    </Collapse>
  </div>
}
const Faqs = () => {
  return <div className='mt-20 max-w-4xl mx-auto'>
    <Item title='为什么要开发bloc？'>
      <p>
        目标：希望bloc能够将程序员从需求变化中解放出来
      </p>
      <p className='mt-4 font-medium'>
        工作原理：
      </p>
      <ul>
        <li>
          首先：我们认为一个函数的功能是能够通过参数来控制与改变的，如果开发者在开发每个功能函数时，将能够控制此函数功能的部分全部提炼为参数暴露出来、且配上易懂的解释。那么bloc认为此函数的含义及其最后的功能表现就可以脱离开发者了。
        </li>
        <li>
          假设现在有满足上面情况的一个函数池，那么用户在函数池里面可以自己通过阅读函数及其参数的描述明白每个函数能提供的“原子功能”。从而用户可以从中挑选出需要的函数并为每个函数设置其所需的参数来组合形成一个工作流程，也就是不同的用户可以根据自己的需求来自行组合自己的任务。
        </li>
        <li>
          而bloc要做的事情就是承接开发者开发的函数形成函数池，而后面向用户提供这些函数、支持用户基于这些函数来编排自己的工作流任务，并且通过设置运行参数来触发任务的运行。
        </li>
      </ul>
      <p className='mt-4 font-medium'>
        总结：
      </p>
      <p>
        总的来说：希望做到开发者只需集中精力开发好每个功能函数，剩下的全部交给bloc - 使用者（这里的使用者可能是开发者自己、运营人员、管理者...）自行通过bloc来操控函数块的串联方式、编写各个函数块的参数输入、设置与编排任务的运行来满足使用者的需求。
      </p>
    </Item>
    <Item title='bloc的长期开发计划是什么？'>
      <ul>
        <li>
          1.0.0 版本计划支持函数-工作流的核心功能
        </li>
        <li>
          2.0.0 版本计划支持 - 覆盖工作流相关的一些周边功能
        <ul>
          <li>
            支持一定的权限管理
          </li>
          <li>
            工作流之间的运行关系管理
          </li>
          <li>
            支持订阅工作流特定节点数据
          </li>
          <li>
            支持类似审批功能（执行中的某个或多个节点需要等待“审批”通过后才继续执行）
          </li>
          <li>
            对于常见功能、提供官方函数库
          </li>
          <li>
            支持直接运行函数（在函数列表界面输入参数后直接运行）
          </li>
        </ul>
        </li>
        <li>
          3.0.0版本计划 - 深挖与探索
          <ul>
            <li>
              支持多种调度模式
            </li>
            <li>
              forever run运行节点的支持
            </li>
          </ul>
        </li>
      </ul>
    </Item>
    <Item title="bloc将会一直只支持Go和Python开发函数吗？">
      <p>
        不是。从整体设计上遵循了重bloc-server、轻client的策略，从而降低实现新语言SDK的复杂度：client SDK的职责只是接收到运行某个函数的命令然后调用对应函数的执行、同时把执行函数传来的信息进行上报而已。十分希望各个语言的开发者能够参与进来开发对应语言的Client-SDK。
      </p>
    </Item>
    <Item title="如何反馈？">
      <ul>
        <li>
          如果是关于项目的讨论，请到<a href="https://github.com/fBloc/bloc/discussions">这里</a>
        </li>
        <li>
          如果是有bug，请到对应的项目提issue。目前主要有以下项目：
          <ul>

            <li>
              <a href="https://github.com/fBloc/bloc-frontend">
                bloc - server
              </a>
              ：负责向前端项目提供查询接口、存储信息、调度待运行的任务、接收client部署实例提交的函数运行信息
            </li>
            <li>
              <a href="https://github.com/fBloc/bloc-frontend">
                bloc - frontend
              </a>
            </li>
            <li>
              <a href="https://github.com/fBloc/bloc-client-go">
                Go语言开发Bloc 函数的SDK
              </a>
              ：基于此SDK可使用go语言开发bloc函数。
            </li>
            <li>
              <a href="https://github.com/fBloc/bloc-client-python">
                Python语言开发Bloc 函数的SDK
              </a>
              ：基于此SDK可使用python开发bloc函数。
            </li>
            <li>
            关于其他项目可到<a href="https://github.com/fBloc">github</a>进行查看
            </li>
          </ul>
        </li>
      </ul>
    </Item>
    <Item title="bloc是开源项目吗？">
      是的
    </Item>
  </div>
}

export default Faqs;