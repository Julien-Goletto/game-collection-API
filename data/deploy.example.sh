# Deploy script example
# Do not forget to make it executable with chmod +x

# createuser ludotheque
# createdb ludotheque -O ludotheque

export PGUSER='ludotheque'
export PGDATABASE='ludotheque'

sqitch init ludotheque --engine pg

sqitch add version_1 -n "structure de base"
sqitch add version_2 -n "seeding db"

# je revert
sqitch revert db:pg:ludotheque
# je deploy
sqitch deploy db:pg:ludotheque
# je verify
sqitch verify db:pg:ludotheque