---
sidebar_position: 2
---
# flow相关操作

## 什么是flow？
有了开发者提供的函数，用户就可以根据这些函数组合和编排工作流程了，而flow就是指工作流程。

## 新建flow
点击`/flow`页面新建按钮，随后会进入flow的编辑页面`/flow/draft/{id}`
<img src="/img/new-flow-shot.jpg" className="h-96"/>

## 添加函数节点
添加节点非常直观，将函数拖动到画板就可以了。
<video src="/video/add-node.mp4" className="h-80" controls />

## 关联节点
关联节点非常简单，将上游函数的输出和下游函数的输入关联起来就可以了，注意的是，关联成功的前提是**二者的数据类型**必须一致，如都为`int`。
<video src="/video/connection.mp4" className="h-80" controls />

## 设置固定参数
当希望参数数据为固定数据时，可以采用手动输入的方式。
<video src="/video/set-param.mp4" className="h-80" controls />

## 发布flow
当flow内的函数完成参数设置和流程关联后，就可以点击右上角的「发布」按钮进行发布了。
<video src="/video/launch-flow.mp4" className="h-80" controls />

## 运行flow
flow发布成功后就可以被触发运行了。
<video src="/video/run-flow.mp4" className="h-80" controls />

## 查看flow运行数据结果
在flow运行完成后，就可以点击「数据详情」按钮查看运行的数据结果了。
<video src="/video/flow-run-result.mp4" className="h-80" controls />

## 查看&修改flow设置
在这里展示了flow的运行和触发设置，此外，也是在这里删除flow。
<img src="/img/flow-settings.png" />

## flow运行历史
这里展示了flow的每一次运行记录，可以在这里查看历史数据如运行数据结果等。
<img src="/img/flow-history.png" />


