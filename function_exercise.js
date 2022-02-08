function main(){
plant();
   counterclockwise();
      plant2();
         clockwise();
            plant();
               counterclockwise();
                  plant2();
                     clockwise();
                        plant();
}

function plant(){
putBeeper();
   move();
      move();
      putBeeper();
         move();
            move();
               putBeeper();

}

function counterclockwise(){
 turnLeft();
   move();
      turnLeft();
}

function plant2(){
move();
   putBeeper();
      move();
         move();
               putBeeper();
                  move();

}
