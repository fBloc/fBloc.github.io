---
sidebar_position: 1
---

# Go

:::tip目标：使用Go在本地搭建并试用bloc

前提：本地环境已安装 git、docker、docker-compose、go
:::


- clone项目到本地并进入相应目录：
```shell
git clone https://github.com/fBloc/bloc-function-demo-go.git && cd bloc-function-demo-go
```

- 安装bloc环境
```shell
/bin/bash ./startup.sh
```

- 运行functions client实例向bloc注册函数
```shell
go run main.go
```
- 大功告成啦。请到浏览器访问 `http://localhost:8083` 进行试用吧！

---

## 备注
- 如果上面步骤有失败、欢迎[提交issue](https://github.com/fBloc/bloc/issues)
- 可运行命令`/bin/bash ./shutdown.sh`清理安装的容器

## 进一步的参考资料
- 前端功能简介：todo
- 探索每个function是如何开发的？ `./bloc_node`目录下的每个package都是与前端一一对应的function，其在`./main.go`中被引入并注册。请对应着前端展示的信息一起看、相信你看了后也可以依样的开发出你自己的函数来、开发好后只需重新运行`go run main.go`就可以在前端看到你开发的函数啦！试试吧！
- bloc函数节点开发教程：todo

