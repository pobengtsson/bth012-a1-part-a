# Use the official Node.js 23 image from Amazon ECR Public Gallery
FROM public.ecr.aws/docker/library/node:23

WORKDIR /app

# Update the below line, so that it uses the https url to your git repo on github
RUN git clone https://github.com/pobengtsson/bth012-a1-part-a.git .

ENTRYPOINT ["node", "src/index.js"]
