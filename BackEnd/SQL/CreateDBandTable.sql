-- CREATE  DATABASE IF NOT EXISTS `Schneider_search`;

CREATE  TABLE IF NOT EXISTS `Schneider_search`.`document` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `file_path` VARCHAR(100) NOT NULL ,
  `tags` VARCHAR(45),
  PRIMARY KEY (`id`) )

-- The below table can have procedures used to calc
-- the number of views a doc has had and 
-- mean time spent on a doc
CREATE  TABLE IF NOT EXISTS `Schneider_search`.`time_spent` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `doc_id` INT UNSIGNED NOT NULL ,
  `start_time` TIME,
  `end_time` TIME,
  FOREIGN KEY (doc_id) REFERENCES document(id),
  PRIMARY KEY (`id`) )
