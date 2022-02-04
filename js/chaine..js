var name;
chaine = "Bonjour";
   searchString = 'o';
   position = 0;
   while ((pos = chaine.indexOf(searchString, position)) != -1) {
       console.log(pos);
       position = pos + searchString.length;
   }

   name = 'aymen';
