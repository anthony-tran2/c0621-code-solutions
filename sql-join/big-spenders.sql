select "p"."amount" as "payment",
       "c"."firstName",
       "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
 order by "payment" desc
 limit 10;
