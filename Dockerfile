FROM quay.io/powerhome/passenger-customizable:0.9.35
ARG precompileassets

RUN bash -lc 'rvm remove all --force && rvm install ruby-2.5.0 && rvm --default use ruby-2.5.0 && gem install bundler -v 1.17.3'
RUN /pd_build/ruby_support/install_ruby_utils.sh
RUN /pd_build/ruby_support/finalize.sh

ENV NODE_OPTIONS "--max_old_space_size=8192"
ENV NVM_VERSION v0.33.8
ENV NODE_VERSION v12.20.1
ENV NPM_VERSION 6.11.3
ENV YARN_VERSION 1.22.0
ENV NVM_DIR /home/app/.nvm
ENV PATH $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/$NVM_VERSION/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install -g npm@$NPM_VERSION yarn@$YARN_VERSION

RUN apt-get update -y \
    && apt-get install -y shared-mime-info=1.5-2ubuntu0.2\
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /home/app/src

# Packages
COPY --chown=app:app playbook-website /home/app/src/playbook-website
COPY --chown=app:app playbook /home/app/src/playbook

# Build library
WORKDIR /home/app/src/playbook
RUN yarn install
RUN curl https://github.com/sass/node-sass/releases/download/v4.13.0/linux-x64-64_binding.node -o node_modules/node-sass/vendor/linux-x64-64_binding.node
RUN yarn release

# Build website
WORKDIR /home/app/src/playbook-website
RUN bundle install --frozen
RUN yarn install
RUN curl https://github.com/sass/node-sass/releases/download/v4.13.0/linux-x64-64_binding.node -o node_modules/node-sass/vendor/linux-x64-64_binding.node

RUN chmod +x services/*.sh
RUN mkdir /etc/service/puma && ln -s /home/app/src/playbook-website/services/puma.sh /etc/service/puma/run

RUN services/startup.sh $precompileassets