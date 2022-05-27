---
sidebar_position: 1
---

# Go

:::tip目标：使用Go在本地搭建并试用bloc

前提：本地环境已安装 git、docker、docker-compose、go。且请确保docker server已经启动。
:::


- clone项目到本地并进入相应目录：
    ```shell
    git clone https://github.com/fBloc/bloc-function-demo-go.git && cd bloc-function-demo-go
    ```

- 安装bloc环境
    ```shell
    /bin/bash ./startup.sh
    ```
- 检查安装 - 如果全部成功、应当有如下6个运行中的 container
    ```shell
    $ docker ps 
    IMAGE                                      STATUS              PORTS                                                                                                         NAMES
    blocapp/bloc-web                           Up About a minute   0.0.0.0:8083->80/tcp                                                                                          bloc_web
    blocapp/bloc-server                        Up About a minute   0.0.0.0:8080->8080/tcp                                                                                        bloc_server
    minio/minio:RELEASE.2021-11-24T23-19-33Z   Up About a minute   0.0.0.0:9000->9000/tcp                                                                                        minio_bloc
    mongo:5.0.5                                Up About a minute   0.0.0.0:27017->27017/tcp                                                                                      mongo_bloc
    rabbitmq:3.9.11-management-alpine          Up About a minute   4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 15671/tcp, 15691-15692/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   rabbit_bloc
    influxdb:2.1.1                             Up About a minute   0.0.0.0:8086->8086/tcp                                                                                        influx_bloc
    ```
- 运行functions client实例向bloc注册函数
    ```shell
    go run main.go
    ```
- 大功告成啦 👏。请到浏览器访问 `http://localhost:8083` 进行试用吧！

---

## 备注
- 如果上面步骤有失败、欢迎[提交issue](https://github.com/fBloc/bloc/issues)
- 可运行命令 `/bin/bash ./shutdown.sh` 清理安装的容器

## 进一步的参考资料
- [前端功能简介](https://docs.blocapp.xyz/docs/category/web%E7%AB%AF%E5%8A%9F%E8%83%BD%E7%AE%80%E4%BB%8B)
- [bloc函数开发教程](https://github.com/fBloc/bloc-client-python/blob/main/README.zh-CN.md#%E7%BC%96%E5%86%99bloc-function)

