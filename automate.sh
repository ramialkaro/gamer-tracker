#!/bin/bash
# pull all remote barnch to local
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
# list all branches
git for-each-ref --format='%(refname:short)' refs/heads |
while read branch; do
    # if [[ $branch == ru_template32 ]]; then
    #     exit 0
    # fi
    echo $branch
    git checkout $branch
    # echo $branch >> ~/dev/app_colors.txt
    # grep -Eo "TEAM_COLOR \[UIColor colorWithRed:\([0-9.]+\/[0-9.]+\) green:\([0-9.]+/[0-9.]+\) blue:\([0-9.]+/[0-9.]+\) alpha:1\]" ./app-ios/Customization.h >> ~/dev/app_colors.txt
    git merge $branch
    sleep 1
done 
