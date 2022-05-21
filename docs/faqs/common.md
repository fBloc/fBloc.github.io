---
sidebar_position: 1
---

# 通用

- flow：等同于工作流程
- function、bloc function、bloc node、bloc function node：均指能够在bloc前端中被拖拽进入工作流进行编排并运行的节点
- client SDK: 指开发者开发bloc function时需要用到的对应编程语言的SDK。如 [Go SDK](https://github.com/fBloc/bloc-client-go)、[Python SDK](https://github.com/fBloc/bloc-client-python)。SDK是封装了以下逻辑的代码：
  - 向bloc报告提供的functions的信息
  - 接收bloc调度发来的执行其下某个function的信息
  - 调用对应function的执行
  - 上报执行的function上报的信息（心跳、日志、进度信息、结果）到bloc
- client、client部署实例、client实例：将基于Client SDK开发的functions代码部署并处于**运行中**的实例！比如你基于Client SDK开发了两个函数的代码，然后分别在3台机器上都将此代码运行了起来。那么此时就有了3个client部署实例。这两个函数支持的并行度是3（比如某一时间两个函数中的一个函数在不同的三个工作流中、且此三个工作流此时都触发了运行此函数，那么这三个部署实例将会各得到一条运行消息并进行运行）