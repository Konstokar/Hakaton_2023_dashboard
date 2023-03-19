package com.cbr.testTask.db.Alinke;

import com.cbr.testTask.db.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "achievement")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AchievementEntity extends BaseEntity {
    @Column(name = "user_id")
    private int userId;

    @Column(name = "vuz_id")
    private int vuzId;

    @Column(name = "link_of_sertificate")
    private int linkOfSertificate;
}
