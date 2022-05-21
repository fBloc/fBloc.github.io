---
sidebar_position: 4
---

为了激励不同语言的开发者参与进行开发对应语言的SDK，从整体设计上遵循了重bloc-server、轻client的策略，从而降低实现新语言SDK的复杂度：

Client SDK被设计为“无状态”的。其在收到function执行的命令时、无需知道其到底是属于哪个工作流里面的function，其只管进行运行此function并调用bloc-server的接口进行上报运行的信息和结果。状态全部在bloc-server进行维护