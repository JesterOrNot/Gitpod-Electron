FROM gitpod/workspace-full-vnc
ENV DEBIAN_FRONTEND noninteractive
RUN sudo apt-get update && sudo apt-get install -y build-essential clang libdbus-1-dev libgtk-3-dev \
    libnotify-dev libgnome-keyring-dev \
    libasound2-dev libcap-dev libcups2-dev libxtst-dev \
    libxss1 libnss3-dev gcc-multilib g++-multilib curl \
    gperf bison python-dbusmock openjdk-8-jre
