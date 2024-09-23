-- Adminer 4.8.1 PostgreSQL 16.2 (Ubuntu 16.2-1.pgdg22.04+1) dump

DROP TABLE IF EXISTS "coach_info";
DROP SEQUENCE IF EXISTS coach_info_id_seq;
CREATE SEQUENCE coach_info_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."coach_info" (
    "id" integer DEFAULT nextval('coach_info_id_seq') NOT NULL,
    "coach_id" integer NOT NULL,
    "info" json NOT NULL,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "status" character varying(10) DEFAULT 'active',
    CONSTRAINT "coach_info_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "set_timestamp_coach_info" BEFORE UPDATE ON "public"."coach_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

CREATE TRIGGER "set_timestamp_users_medical_records" BEFORE UPDATE ON "public"."coach_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "coaches_ratings";
DROP SEQUENCE IF EXISTS coaches_ratings_id_seq;
CREATE SEQUENCE coaches_ratings_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."coaches_ratings" (
    "id" integer DEFAULT nextval('coaches_ratings_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "stars" integer DEFAULT '0',
    "rated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "coaches_ratings_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "diets";
DROP SEQUENCE IF EXISTS diets_id_seq;
CREATE SEQUENCE diets_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."diets" (
    "id" integer DEFAULT nextval('diets_id_seq') NOT NULL,
    "diet_name" character varying(255) NOT NULL,
    "content" text NOT NULL,
    CONSTRAINT "diets_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "email" character varying(255) NOT NULL,
    "phone" character varying(20) NOT NULL,
    "registered_time" timestamp DEFAULT CURRENT_TIMESTAMP,
    "access" integer DEFAULT '0',
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_phone_key" UNIQUE ("phone"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "users_coach";
DROP SEQUENCE IF EXISTS users_coach_id_seq;
CREATE SEQUENCE users_coach_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_coach" (
    "id" integer DEFAULT nextval('users_coach_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "choosed_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_coach_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "users_diets";
DROP SEQUENCE IF EXISTS users_diets_id_seq;
CREATE SEQUENCE users_diets_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_diets" (
    "id" integer DEFAULT nextval('users_diets_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "diet" character varying(255) NOT NULL,
    "reg_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_diets_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "users_login";
DROP SEQUENCE IF EXISTS users_login_id_seq;
CREATE SEQUENCE users_login_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_login" (
    "id" integer DEFAULT nextval('users_login_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "loggedin_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_login_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_login";

DROP TABLE IF EXISTS "users_medical_records";
DROP SEQUENCE IF EXISTS users_medical_records_id_seq;
CREATE SEQUENCE users_medical_records_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_medical_records" (
    "id" integer DEFAULT nextval('users_medical_records_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "content" text NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_medical_records_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "users_pics";
DROP SEQUENCE IF EXISTS users_pics_id_seq;
CREATE SEQUENCE users_pics_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_pics" (
    "id" integer DEFAULT nextval('users_pics_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "pic_url" text NOT NULL,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_pics_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "update_users_pics_updated_at" BEFORE UPDATE ON "public"."users_pics" FOR EACH ROW EXECUTE FUNCTION update_users_pics_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "users_plans";
DROP SEQUENCE IF EXISTS users_plans_id_seq;
CREATE SEQUENCE users_plans_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_plans" (
    "id" integer DEFAULT nextval('users_plans_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "movements" jsonb NOT NULL,
    "reg_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "progress" numeric DEFAULT '0',
    CONSTRAINT "users_plans_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "update_users_plans_updated_at" BEFORE UPDATE ON "public"."users_plans" FOR EACH ROW EXECUTE FUNCTION update_users_plans_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "users_workout_info";
DROP SEQUENCE IF EXISTS users_workout_info_id_seq;
CREATE SEQUENCE users_workout_info_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users_workout_info" (
    "id" integer DEFAULT nextval('users_workout_info_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "weight" integer NOT NULL,
    "age" integer NOT NULL,
    "height" integer NOT NULL,
    "sex" character varying(10) NOT NULL,
    "goal" character varying(255) NOT NULL,
    "level" character varying(255) NOT NULL,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_workout_info_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "set_timestamp_users_workout_info" BEFORE UPDATE ON "public"."users_workout_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "wiki";
DROP SEQUENCE IF EXISTS wiki_id_seq;
CREATE SEQUENCE wiki_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."wiki" (
    "id" integer DEFAULT nextval('wiki_id_seq') NOT NULL,
    "plan_id" integer DEFAULT '0' NOT NULL,
    "video_url" text NOT NULL,
    "title" character varying(255) NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "wiki_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "update_wiki_updated_at" BEFORE UPDATE ON "public"."wiki" FOR EACH ROW EXECUTE FUNCTION update_wiki_timestamp();;

DELIMITER ;

ALTER TABLE ONLY "public"."coach_info" ADD CONSTRAINT "coach_info_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."coaches_ratings" ADD CONSTRAINT "coaches_ratings_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."coaches_ratings" ADD CONSTRAINT "coaches_ratings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_diets" ADD CONSTRAINT "users_diets_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_diets" ADD CONSTRAINT "users_diets_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_login" ADD CONSTRAINT "users_login_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_medical_records" ADD CONSTRAINT "users_medical_records_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_pics" ADD CONSTRAINT "users_pics_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_workout_info" ADD CONSTRAINT "users_workout_info_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."wiki" ADD CONSTRAINT "wiki_plan_id_fkey" FOREIGN KEY (plan_id) REFERENCES users_plans(id) ON DELETE CASCADE NOT DEFERRABLE;

-- 2024-09-23 09:36:42.306471+00