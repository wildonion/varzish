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

DROP TABLE IF EXISTS "gpt_coach_assistant";
DROP SEQUENCE IF EXISTS gpt_coach_assistant_id_seq;
CREATE SEQUENCE gpt_coach_assistant_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 20 CACHE 1;

CREATE TABLE "public"."gpt_coach_assistant" (
    "id" integer DEFAULT nextval('gpt_coach_assistant_id_seq') NOT NULL,
    "coach_id" integer,
    "assist_id" character varying(255) NOT NULL,
    CONSTRAINT "gpt_coach_assistant_assist_id_key" UNIQUE ("assist_id"),
    CONSTRAINT "gpt_coach_assistant_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "gpt_coach_assistant";
INSERT INTO "gpt_coach_assistant" ("id", "coach_id", "assist_id") VALUES
(20,	2,	'asst_roQM9VE73HxfP2F7i0zdhZHO');

DROP TABLE IF EXISTS "gpt_users_plans";
DROP SEQUENCE IF EXISTS gpt_users_plans_id_seq;
CREATE SEQUENCE gpt_users_plans_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."gpt_users_plans" (
    "id" integer DEFAULT nextval('gpt_users_plans_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "thread_id" character varying(255),
    "run_id" character varying(255),
    "message" text,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "gpt_users_plans_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "gpt_users_plans";
INSERT INTO "gpt_users_plans" ("id", "user_id", "coach_id", "thread_id", "run_id", "message", "created_at") VALUES
(1,	3,	2,	'thread_R72xxmD83YDSgHezLpvDPYu1',	'run_lAvd6jqZw0qVsP5DeA4CYpGm',	'من ۲۸ سالمه یه برنامه میخواستم و وزنم ۶۸ کیلوگرم هست برای فیتنس مدلینگ',	'2024-09-27 08:02:47.183094');

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
CREATE SEQUENCE users_coach_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."users_coach" (
    "id" integer DEFAULT nextval('users_coach_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "choosed_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "unique_cu_id" UNIQUE ("user_id", "coach_id"),
    CONSTRAINT "users_coach_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_coach";
INSERT INTO "users_coach" ("id", "user_id", "coach_id", "choosed_at") VALUES
(1,	3,	2,	'2024-09-27 09:33:27.423787');

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
CREATE SEQUENCE users_plans_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users_plans" (
    "id" integer DEFAULT nextval('users_plans_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "coach_id" integer NOT NULL,
    "movements" text NOT NULL,
    "reg_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "progress" numeric DEFAULT '0',
    CONSTRAINT "users_plans_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users_plans";
INSERT INTO "users_plans" ("id", "user_id", "coach_id", "movements", "reg_at", "updated_at", "progress") VALUES
(1,	3,	2,	'### برنامه تمرینی فیتنس مدلینگ

#### مشخصات شما:
- سن: ۲۸ سال
- وزن: ۶۸ کیلوگرم

### روز اول: پاها و پایین تنه

#### گرم‌ کردن:
1. **پریدن با طناب**: 5 دقیقه
2. **حرکات کششی دینامیک**: 5 دقیقه

#### تمرینات اصلی:
1. **اسکوات با هالتر**: 3 ست، 12-10 تکرار
2. **اسکوات بلغاری**: 3 ست، هر پا 12 تکرار
3. **ددلیفت با هالتر**: 3 ست، 10 تکرار
4. **پرس پا**: 3 ست، 15-12 تکرار
5. **کاف ریز**: 4 ست، 20 تکرار

#### سرد کردن:
1. **دویدن آهسته یا پیاده‌روی**: 5 دقیقه
2. **حرکات کششی استاتیک**: 5 دقیقه

### روز دوم: بالاتنه

#### گرم‌ کردن:
1. **پریدن به جلو و عقب**: 3 دقیقه
2. **حرکات چرخشی بازو**: 3 دقیقه

#### تمرینات اصلی:
1. **پرس سینه با دمبل**: 4 ست، 12-10 تکرار
2. **پرس بالا سینه با هالتر**: 3 ست، 12 تکرار
3. **کشیدن به بالا (Pull-ups)**: 3 ست، هر تعدادی که می‌توانید
4. **پرس شانه با دمبل**: 4 ست، 12 تکرار
5. **ددلیفت با دمبل**: 3 ست، 15 تکرار

#### سرد کردن:
1. **پیاده‌روی یا آرام دویدن**: 5 دقیقه
2. **حرکات کششی استاتیک**: 5 دقیقه

### روز سوم: استراحت فعال یا تمرینات هوازی

#### فعالیت‌های پیشنهاد شده:
1. **دویدن یا پیاده‌روی تند**: 30-45 دقیقه
2. **دوچرخه‌سواری**: 45 دقیقه

### روز چهارم: تمرین کل بدن

#### گرم‌ کردن:
1. **پریدن با طناب**: 5 دقیقه
2. **حرکات کششی دینامیک**: 5 دقیقه

#### تمرینات اصلی:
1. **اسکوات با هالتر**: 3 ست، 15-12 تکرار
2. **پرس سینه با دمبل**: 3 ست، 12-10 تکرار
3. **ددلیفت با هالتر**: 3 ست، 10 تکرار
4. **پرس شانه با هالتر**: 3 ست، 12 تکرار
5. **پلانک**: 4 ست، هر ست 1 دقیقه

#### سرد کردن:
1. **پیاده‌روی یا آرام دویدن**: 5 دقیقه
2. **حرکات کششی استاتیک**: 5 دقیقه

### روز پنجم: تمرینات شکم و هسته بدن

#### گرم‌ کردن:
1. **پریدن به جلو و عقب**: 3 دقیقه
2. **حرکات چرخشی شکم**: 3 دقیقه

#### تمرینات اصلی:
1. **پلانک**: 4 ست، هر ست 1 دقیقه
2. **کرانچ با وزن**: 3 ست، 15 تکرار
3. **آویزان شدن و بالا بردن پاها**: 3 ست، 15 تکرار
4. **پلانک جانبی**: 3 ست، هر طرف 1 دقیقه
5. **کیک بک**: 4 ست، هر پا 20 تکرار

#### سرد کردن:
1. **پیاده‌روی یا آرام دویدن**: 5 دقیقه
2. **حرکات کششی استاتیک**: 5 دقیقه

### روز ششم و هفتم: استراحت کامل

### نکات مهم:
- **تغذیه**: مصرف پروتئین بالا، میوه‌ها، سبزیجات، و آب کافی.
- **خواب و استراحت**: خواب کافی برای بهبود ریکاوری و عملکرد بهتر.
- **پیشگیری از آسیب‌ها**: در صورت وجود آسیب یا درد، با پزشک یا متخصص مشورت کنید【7:0†source】【4:0†source】.

این برنامه می‌تواند برای اهداف فیتنس مدلینگ شما مفید باشد. در صورت نیاز به تنظیمات خاص، با یک مربی مجرب مشورت کنید.',	'2024-09-27 09:33:27.399831',	'2024-09-27 09:33:27.399831',	0);

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

ALTER TABLE ONLY "public"."gpt_coach_assistant" ADD CONSTRAINT "gpt_coach_assistant_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_coach" ADD CONSTRAINT "users_coach_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_diets" ADD CONSTRAINT "users_diets_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_login" ADD CONSTRAINT "users_login_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_medical_records" ADD CONSTRAINT "users_medical_records_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_pics" ADD CONSTRAINT "users_pics_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_coach_id_fkey" FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."users_plans" ADD CONSTRAINT "users_plans_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users_workout_info" ADD CONSTRAINT "users_workout_info_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE;

-- 2024-09-27 09:47:13.570465+00