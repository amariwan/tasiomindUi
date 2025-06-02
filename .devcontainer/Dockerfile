FROM node:lts-bullseye

WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN apt-get update && apt-get install -y \
  git \
  zsh \
  curl \
  wget \
  unzip \
  fonts-powerline \
  && rm -rf /var/lib/apt/lists/*

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended && \
  chsh -s $(which zsh) && \
  echo 'ZSH_THEME="agnoster"' >> ~/.zshrc && \
  echo 'export PATH=$PATH:/workspace/node_modules/.bin' >> ~/.zshrc

SHELL ["/bin/zsh", "-c"]

COPY . .

RUN pnpm install

RUN npx playwright install --with-deps

EXPOSE 3000

CMD ["pnpm", "dev"]
