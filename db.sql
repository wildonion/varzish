-- Adminer 4.8.1 PostgreSQL 16.2 (Ubuntu 16.2-1.pgdg22.04+1) dump

DROP TABLE IF EXISTS "coach_info";
DROP SEQUENCE IF EXISTS coach_info_id_seq;
CREATE SEQUENCE coach_info_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."coach_info" (
    "id" integer DEFAULT nextval('coach_info_id_seq') NOT NULL,
    "coach_id" integer NOT NULL,
    "info" json NOT NULL,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "status" character varying(10) DEFAULT 'active',
    CONSTRAINT "coach_info_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "unique_cinfo_user_id" UNIQUE ("coach_id")
) WITH (oids = false);

TRUNCATE "coach_info";
INSERT INTO "coach_info" ("id", "coach_id", "info", "updated_at", "status") VALUES
(1,	2,	'{"grade":"Updated coach information"}',	'2024-09-24 11:52:03.869666',	'active');

DELIMITER ;;

CREATE TRIGGER "set_timestamp_coach_info" BEFORE UPDATE ON "public"."coach_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

CREATE TRIGGER "set_timestamp_users_medical_records" BEFORE UPDATE ON "public"."coach_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "coaches_ratings";
DROP SEQUENCE IF EXISTS coaches_ratings_id_seq;
CREATE SEQUENCE coaches_ratings_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."coaches_ratings" (
    "id" integer DEFAULT nextval('coaches_ratings_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "stars" integer DEFAULT '0',
    "rated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "coaches_ratings_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "unique_rate_cid_user_id" UNIQUE ("coach_id"),
    CONSTRAINT "unique_rate_user_id" UNIQUE ("user_id"),
    CONSTRAINT "unique_user_coach" UNIQUE ("user_id", "coach_id")
) WITH (oids = false);

TRUNCATE "coaches_ratings";
INSERT INTO "coaches_ratings" ("id", "user_id", "coach_id", "stars", "rated_at") VALUES
(1,	3,	2,	4,	'2024-09-24 12:12:38.564738');

DROP TABLE IF EXISTS "diets";
DROP SEQUENCE IF EXISTS diets_id_seq;
CREATE SEQUENCE diets_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."diets" (
    "id" integer DEFAULT nextval('diets_id_seq') NOT NULL,
    "diet_name" character varying(255) NOT NULL,
    "content" text NOT NULL,
    CONSTRAINT "diets_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "diets";
INSERT INTO "diets" ("id", "diet_name", "content") VALUES
(1,	'outmeal',	'deliciouse');

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 3 CACHE 1;

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

TRUNCATE "users";
INSERT INTO "users" ("id", "email", "phone", "registered_time", "access") VALUES
(1,	'ea_pain@yahoo.com',	'09211686115112',	'2024-09-21 13:30:59.496231',	2),
(2,	'abarmardeatashyne@gmail.com',	'092116861151',	'2024-09-23 11:44:36.406105',	1),
(3,	'marefimoghaddam@icloud.com',	'09211686115',	'2024-09-24 11:30:56.644755',	0);

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

TRUNCATE "users_coach";

DROP TABLE IF EXISTS "users_diets";
DROP SEQUENCE IF EXISTS users_diets_id_seq;
CREATE SEQUENCE users_diets_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."users_diets" (
    "id" integer DEFAULT nextval('users_diets_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "diet" character varying(255) NOT NULL,
    "reg_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_diets_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_diets";
INSERT INTO "users_diets" ("id", "user_id", "coach_id", "diet", "reg_at") VALUES
(2,	3,	0,	'1',	'2024-09-24 12:16:09.604141');

DROP TABLE IF EXISTS "users_login";
DROP SEQUENCE IF EXISTS users_login_id_seq;
CREATE SEQUENCE users_login_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 24 CACHE 1;

CREATE TABLE "public"."users_login" (
    "id" integer DEFAULT nextval('users_login_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "loggedin_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "unique_user_id" UNIQUE ("user_id"),
    CONSTRAINT "users_login_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_login";
INSERT INTO "users_login" ("id", "user_id", "loggedin_at") VALUES
(1,	1,	'2024-09-24 11:33:42.815528'),
(7,	2,	'2024-09-24 11:56:02.661389'),
(24,	3,	'2024-09-24 12:05:00.927331');

DROP TABLE IF EXISTS "users_medical_records";
DROP SEQUENCE IF EXISTS users_medical_records_id_seq;
CREATE SEQUENCE users_medical_records_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."users_medical_records" (
    "id" integer DEFAULT nextval('users_medical_records_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "content" text NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "unique_med_user_id" UNIQUE ("user_id"),
    CONSTRAINT "users_medical_records_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_medical_records";
INSERT INTO "users_medical_records" ("id", "user_id", "content", "created_at", "updated_at") VALUES
(1,	1,	'No known allergies.',	'2024-09-23 11:41:21.912726',	'2024-09-23 11:41:21.912726'),
(2,	3,	'Hadrd Penis',	'2024-09-24 12:17:02.110636',	'2024-09-24 12:17:02.110636');

DROP TABLE IF EXISTS "users_pics";
DROP SEQUENCE IF EXISTS users_pics_id_seq;
CREATE SEQUENCE users_pics_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."users_pics" (
    "id" integer DEFAULT nextval('users_pics_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "pic_url" text NOT NULL,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "unique_pic_user_id" UNIQUE ("user_id"),
    CONSTRAINT "users_pics_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_pics";
INSERT INTO "users_pics" ("id", "user_id", "pic_url", "updated_at") VALUES
(1,	2,	'/uploads/ban-1727179109128.jpg',	'2024-09-24 11:58:29.151643'),
(2,	3,	'/uploads/ban-1727179566750.jpg',	'2024-09-24 12:06:06.769435');

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

TRUNCATE "users_plans";

DELIMITER ;;

CREATE TRIGGER "update_users_plans_updated_at" BEFORE UPDATE ON "public"."users_plans" FOR EACH ROW EXECUTE FUNCTION update_users_plans_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "users_workout_info";
DROP SEQUENCE IF EXISTS users_workout_info_id_seq;
CREATE SEQUENCE users_workout_info_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

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
    CONSTRAINT "unique_work_user_id" UNIQUE ("user_id"),
    CONSTRAINT "users_workout_info_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_workout_info";
INSERT INTO "users_workout_info" ("id", "user_id", "weight", "age", "height", "sex", "goal", "level", "updated_at") VALUES
(1,	1,	70,	25,	175,	'male',	'build muscle',	'intermediate',	'2024-09-23 11:41:37.51724'),
(2,	3,	70,	25,	175,	'male',	'build muscle',	'intermediate',	'2024-09-24 12:17:12.479695');

DELIMITER ;;

CREATE TRIGGER "set_timestamp_users_workout_info" BEFORE UPDATE ON "public"."users_workout_info" FOR EACH ROW EXECUTE FUNCTION update_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "wiki";
DROP SEQUENCE IF EXISTS wiki_id_seq;
CREATE SEQUENCE wiki_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;

CREATE TABLE "public"."wiki" (
    "id" integer DEFAULT nextval('wiki_id_seq') NOT NULL,
    "plan_id" integer DEFAULT '0' NOT NULL,
    "video_url" text NOT NULL,
    "title" character varying(255) NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "wiki_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "wiki";
INSERT INTO "wiki" ("id", "plan_id", "video_url", "title", "created_at", "updated_at") VALUES
(4,	0,	'/uploads/videos/4267245-uhd_3840_2160_30fps-1727178494728.mp4',	'squat',	'2024-09-24 11:48:14.780905',	'2024-09-24 11:48:14.780905'),
(5,	0,	'/uploads/videos/4267245-uhd_3840_2160_30fps-1727178526991.mp4',	'squat',	'2024-09-24 11:48:47.044172',	'2024-09-24 11:48:47.044172');

DELIMITER ;;

CREATE TRIGGER "update_wiki_updated_at" BEFORE UPDATE ON "public"."wiki" FOR EACH ROW EXECUTE FUNCTION update_wiki_timestamp();;

DELIMITER ;

ALTER TABLE ONLY "public"."coach_info" ADD CONSTRAINT "coach_info_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."coaches_ratings" ADD CONSTRAINT "coaches_ratings_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."coaches_ratings" ADD CONSTRAINT "coaches_ratings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_diets" ADD CONSTRAINT "users_diets_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_login" ADD CONSTRAINT "users_login_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_medical_records" ADD CONSTRAINT "users_medical_records_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_pics" ADD CONSTRAINT "users_pics_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_workout_info" ADD CONSTRAINT "users_workout_info_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

-- 2024-09-24 12:32:11.488773+00