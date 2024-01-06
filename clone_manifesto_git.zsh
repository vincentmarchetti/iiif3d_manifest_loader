
if [[ -d manifesto ]]; then

echo "manifesto already exists. Check status and push to remote " \
     "before deleting"
else
	echo "ready to clone manifesto"
	git clone git@github.com:vincentmarchetti/manifesto.git
	cd manifesto
	git branch kshell-main
	git checkout kshell-main
	git pull --set-upstream origin kshell-main
	npm install
	npm run build
fi
