---
sidebar_position: 1
---

# 本地环境搭建指南

:::tip本地环境搭建指南
本地测试环境：指的是不带有预置函数的bloc环境。前提：本地环境已安装 git、docker、docker-compose
:::

- clone项目到本地并进入相应目录：
```shell
git clone https://github.com/fBloc/bloc.git && cd bloc
```

- 安装bloc环境
```shell
/bin/bash ./startup.sh
```

- 成功的话、上一步最后的输出信息应该是该是：
```shell
******************************
All ready!
bloc-web address http://localhost:8083; default user: bloc; default password: maytheforcebewithyou
bloc-backend-server address http://localhost:8080
rabbitMQ address 127.0.0.1:5672; user blocRabbit, password blocRabbitPasswd
******************************
```

- 到此就全部成功啦

## 备注：
- 如果上面步骤有失败、欢迎[提交issue](https://github.com/fBloc/bloc/issues)
- 可运行命令`/bin/bash ./shutdown.sh`清理安装的容器