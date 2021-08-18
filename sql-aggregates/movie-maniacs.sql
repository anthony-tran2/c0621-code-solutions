select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "totalSpentOnRentals"
  from "customers"
  join "payments" using ("customerId")
  group by ("customers"."customerId")
  order by "totalSpentOnRentals" desc;
