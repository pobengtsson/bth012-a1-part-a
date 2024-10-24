# Use the official Node.js 23 image from Amazon ECR Public Gallery
FROM public.ecr.aws/docker/library/node:23

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/pobengtsson/bth012-a1-part-a.git .

ENTRYPOINT ["cat", "src/index.js"]
