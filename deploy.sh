echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

# git push -f git@github.com:BT-cod/Portfolio.git main:gh-pages

cd -