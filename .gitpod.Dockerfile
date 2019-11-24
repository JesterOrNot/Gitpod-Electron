FROM gitpod/workspace-full-vnc

USER root

RUN sudo apt-get update \
    && sudo apt-get install -y \
    libasound2-dev \
    libgtk-3-dev \
    libnss3-dev \
    && sudo rm -rf /var/lib/apt/lists/*