import React from 'react';
import {FaBolt, FaMousePointer, FaCalendar, FaCalendarAlt} from 'react-icons/fa'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeSample, {Title, Description} from '../components/CodeSample';
import Faqs from '../components/Faqs';

function Features() {
  return (
    <main className='bg-gray-900 rounded-t-2xl text-white py-40'>
      <div>
        <div className='max-w-7xl mx-auto flex items-center mb-60'>
          <img src="/img/shape.svg" alt="" className='mr-40' />
          <div>
            <Title>
            你提供函数，剩下的交给Bloc
            </Title>
            <Description className='mt-8'>
              在部署好bloc环境后，开发者可基于对应语言的SDK实现自己业务逻辑的函数，发布后这些函数便可以在boc上被使用了。所有用户都可通过在bloc的web端自定义组合与编排这些函数, 实现定制的工作流程，满足其特定的需求。
            </Description>
          </div>
        </div>
        <div className='flex items-center mb-60 pr-20 bg-no-repeat' style={{
          backgroundImage: 'url(/img/decoration.svg)',
          backgroundSize: 'contain',
          backgroundPosition: '28vw center'
        }}>
          <img src="/img/shot-node.png" alt="" className='mr-40 w-2/5' />
          <div>
            <Title>
              功能强大且友好易用的web端
            </Title>

            <Description className='mt-8'>
              bloc精心设计和开发了一个网页应用端， 在这里，用户以及开发者自身可以查看开发者提供的所有函数及其描述、输入、输出等详细信息。当然，更重要的是，用户点点鼠标就可以消费这些函数来构建和运行工作流程。
            </Description>
            <Description className='mt-4'>
              在构建工作流程时，函数的入参既可以是上一个函数的运行结果，也可以按需被手动设置为固定数据，要完成这些并不复杂，只是简单的拖拽操作或者输入表单而已。
            </Description>
          </div>
        </div>
        <div className='mb-60 text-center'>
          <Title>
            多种触发方式，满足各种需求场景
          </Title>
          <Description className='mt-4'>
            不论你的工作流程需要被定时周期执行或者仅在某些情况下被触发执行，亦或是点下按钮即可执行，有了bloc，这些需求都能被轻松实现。
          </Description>
          <div className='max-w-7xl mx-auto flex mt-20 mb-60'>
            <div className='flex-1'>
              <FaCalendarAlt size={90} className="inline-block" />
              <div className='mt-6 bg-white text-gray-400 shadow-inner rounded-lg h-10 w-3/5 mx-auto leading-10 text-left px-4'>
                50 7 * * *
              </div>
              <p className='mt-2'>
                crontab定时任务
              </p>
            </div>
            <div className='flex-1'>
              <FaBolt size={90} className="inline-block"  />
              <div className='mt-6 bg-white text-gray-400 shadow-inner rounded-lg h-10 w-3/5 mx-auto leading-10 text-left px-4'>
                83b3a4c1-017a3c69fae4af2...
              </div>
              <p className='mt-2'>
                webhook触发
              </p>
            </div>
            <div className='flex-1'>
              <FaMousePointer size={90} className="inline-block" />
              <div className='mt-6 bg-primary text whiteray-400 rounded-lg h-10 w-3/5 mx-auto leading-10'>
                50 7 * * *
              </div>
              <p className='mt-2'>
                手动触发
              </p>
            </div>
          </div>
          <div className='flex items-center mb-60 pl-20 bg-no-repeat'>
            <div className='text-left'>
              <Title>
                运行状态了如指掌  
              </Title>
              <Description className='mt-8'>
                想要全面掌握函数的运行状态吗？没问题！bloc的web端支持实时的、完整的运行日志和运行进度百分比展示，让你对工作流程乃至函数节点的运行情况了如指掌。
              </Description>
            </div>
            <img src="/img/log.png" alt="" className='ml-40 w-2/5 object-cover rounded-lg' />
          </div>
        </div>
        <CodeSample/>
        <div className='max-w-7xl mx-auto flex items-center mb-60'>
          <img src="/img/nodes.png" alt="" className='mr-40 w-96' />
          <div>
            <Title>
            原生分布式运行
            </Title>
            <Description className='mt-8'>
              函数的运行是无状态的，非上下游的函数运行的并行度完全取决于函数实例部署的数量，通过水平扩展部署更多实例，理论上可以“无限”扩展并行度。
            </Description>
          </div>
        </div>
        <div className='max-w-7xl mx-auto flex items-center mb-60'>
          <div>
            <Title>
              强大的可复用性
            </Title>
            <Description className='mt-8'>
              支持跨团队、跨代码仓库、跨语言的函数复用。只要是在bloc-server中注册的函数，都能在bloc的web端被直接消费使用。
            </Description>
          </div>
          <img src="/img/cooperate.png" alt="" className='ml-40 w-96' />
        </div>
      </div>
      <div className='text-center '>
        <a href="#" className='inline-flex items-center justify-between text-white cursor-pointer mr-8 h-12 px-4 text-xl bg-primary border border-solid border-transparent rounded-lg hover:no-underline hover:text-white'>
          查看示例项目
        </a>

        <a href="https://github.com/fBloc/bloc" target="_blank" className='inline-flex items-center justify-between h-12 px-4 text-primary cursor-pointer text-xl bg-transparent border border-solid border-primary rounded-lg hover:no-underline hover:text-primary'>
          前往GitHub
        </a>

      </div>
      <Faqs />
    </main>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <header className='h-[80vh] flex items-center justify-center'>
        <div className='flex items-center max-w-7xl'>
          <div className='mr-10 w-[480px] flex-shrink-0'>
            <Title>
            通过组合函数构建、运行你的工作流程
            </Title>
            <Description className='mt-8'>
              像组装积木一样，通过将一个个最基础的函数进行组合和编排，实现你的各种需求
            </Description>
          </div>
          <div className='flex-grow'>
            <img  src="/img/shot.png" alt="" className='w-[760px] h-[472px]' />
          </div>
        </div>
      </header>
      <Features />
    </Layout>
  );
}
