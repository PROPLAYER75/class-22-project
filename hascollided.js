function hasCollided(bullet,wall){

    bulletRightEdge=bullet.x +bullet.width;
    wallLeftedge=wall.x;
    if(bulletRightEdge>=wallLeftedge){
        return true
    }
       return false;
    }