#!/bin/bash
set -eo

# install fzf
#echo "Installing fzf..."
#git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
#~/.fzf/install
#
## install npm and nodejs
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#nvm install --lts

# Copy ssh key
cp /localenv/.ssh/id_ed25519 ~/.ssh

# Setup git user.email
git config --global user.email "dmorand@gmail.com"
