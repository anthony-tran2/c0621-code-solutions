select "f"."releaseYear",
       "c"."name" as "category",
       "f"."title"
  from "films" as "f"
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
