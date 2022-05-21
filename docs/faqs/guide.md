---
sidebar_position: 5
---

# 操作与使用

- 支持复制一个工作流的配置吗？比如我看到一个工作流和我想要创建的几乎一样，我想要复制一份后过来然后进行微改就可以了。是需要在哪里进行复制呢？

  答： 在工作流详情页面右上角的“更多”选项里可以进行复制


- 如何基于webhook触发工作流程的运行？

  答： 首先在每个工作流的详情-设置页面可以找到每个工作流的`trigger_key`，通过HTTP的GET方法访问：`$bloc_server_address/api/v1/flow/run/by_trigger_key/$trigger_key` 即可实现触发

- 是否支持动态输入值触发工作流？

  答： 假设一个很常见的场景：工作流的功能是给新注册的用户发送欢迎邮件，这种情况下既不适用于通过前端手动触发、也不适用于crontab周期触发（如果不在意实时性、倒是也可以通过首个节点进行批量拉取需要发起的用户）。最理想的触发方式是每次调用的时候传入这个用户ID并触发对应工作流的运行然后可通过HTTP的POST方法访问`$bloc_server_address/api/v1/flow/run/by_trigger_key_with_param_overide/$trigger_key`并在body中通过携带对应的值即可。具体可[参见](#todo)