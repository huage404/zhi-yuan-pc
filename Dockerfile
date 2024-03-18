# 使用官方 Node.js v16.17.1 镜像作为基础镜像
FROM node:16.17.1

# 设置工作目录。这是后续命令的执行目录
WORKDIR /app

# 将 package.json 和 pnpm-lock.yaml 文件复制到容器中
COPY package.json pnpm-lock.yaml ./

# 设置 npm 使用淘宝镜像源
RUN npm config set registry https://registry.npmmirror.com

# 安装 pnpm
RUN npm install -g pnpm

# 设置 pnpm 使用淘宝镜像源
RUN pnpm config set registry https://registry.npmmirror.com

# 使用 pnpm 安装项目依赖。利用 Docker 的缓存机制，只有当 package.json 或 pnpm-lock.yaml 文件改变时才重新安装依赖
RUN pnpm install

# 将项目文件复制到容器中
COPY . .

# 构建前端项目。这个命令可能根据您的实际情况有所不同
RUN pnpm run build:prod

# 暴露 80 端口
EXPOSE 80

# 运行项目。这个命令可能根据您的实际情况有所不同
CMD ["pnpm", "start"]
