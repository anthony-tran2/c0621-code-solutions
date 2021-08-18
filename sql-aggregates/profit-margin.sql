WITH "cte_totalReplacementCost" AS (
  select "films"."filmId",
         "films"."replacementCost" * count("inventory") as "totalCost"
  from "films"
  join "inventory" using ("filmId")
  group by "films"."filmId"
)

WITH "cte_totalRevenue" AS (
  select "films"."filmId",
         "films"."rentalRate" * count("rentals"."inventoryId") as "totalRevenue"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  group by "films"."filmId";
  )

select "films"."title",
        "films"."description",
        "films"."rating",
        "cte_totalRevenue"."totalRevenue" - "cte_totalReplacementCost"."totalCost"  as "totalProfit"
  from "films"
  join "cte_totalReplacementCost" using ("filmId")
  join "cte_totalRevenue" using ("filmId")
  order by "totalProfit" desc
  limit 5;
