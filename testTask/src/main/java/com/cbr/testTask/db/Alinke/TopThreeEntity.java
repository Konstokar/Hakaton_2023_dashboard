package com.cbr.testTask.db.Alinke;

import com.cbr.testTask.db.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "top_three")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TopThreeEntity extends BaseEntity {
    @Column(name = "top_user_id_first")
    private int topUserIdFirst;
    @Column(name = "top_user_id_second")
    private int topUserIdSecond;
    @Column(name = "top_user_id_third")
    private int topUserIdThird;
    @Column(name = "top_user_requesting")
    private int topUserRequesting;

}
