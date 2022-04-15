# Deploy script example
# Do not forget to make it executable with chmod +x

createuser filmotheque
createdb filmotheque -O filmotheque

export PGUSER='filmotheque'
export PGDATABASE='filmotheque'

sqitch init training_API_scripts --engine-pg

sqitch add version_1 -n "structure de base"
sqitch add version_2 -n "seeding db"

# je revert
sqitch revert db:pg:filmotheque
# je deploy
sqitch deploy db:pg:filmotheque
# je verify
sqitch verify db:pg:filmotheque